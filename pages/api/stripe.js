import Stripe from 'stripe';


const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
/**Pour la gestion des paiements avec stipe, j'utilise la fonction handler qui a deux paramètre   */
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const params = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
/**La clé de livraison délivré par stripe */        
        shipping_options: [
          { shipping_rate: 'shr_1NEsfoAZslgq5wOJcS7tPKNK' },
          
        ],
        line_items: req.body.map((item) => {
          const img = item.image[0].asset._ref;
/**Le lien de la base de données Sanity permettant charger les images des articles sélectionner par les utilisateurs */          
          const newImage = img.replace('image-', 'https://cdn.sanity.io/images/660qwzb3/production/').replace('-webp', '.webp');

          return {
            price_data: { 
              currency: 'usd',
              product_data: { 
                name: item.name,
                images: [newImage],
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled:true,
              minimum: 1,
            },
            quantity: item.quantity
          }
        }),
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/canceled`,
      }

      // Création de la Session de test (appelé Checkout) provenenant des paramètre charger plus haut.
      const session = await stripe.checkout.sessions.create(params);

      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}