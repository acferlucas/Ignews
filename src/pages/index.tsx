import { GetServerSideProps } from 'next';
import { signIn, useSession } from 'next-auth/client';
import { api } from '../services/api';
import { stripe } from '../services/stripe';
import { getStripeJs } from '../services/stripe-js';
import { Container } from '../styles/pages/Home';

interface HomeProps {
  product: {
    productId: string;
    price: string;
  };
}

export default function Home({ product }: HomeProps): JSX.Element {
  const [session] = useSession();

  async function handleSubscribe() {
    if (!session) {
      signIn('github');
    }

    try {
      const response = await api.post('/subscribe');

      const { sessionId } = response.data;

      const stripeJs = await getStripeJs();

      await stripeJs.redirectToCheckout({ sessionId });
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <Container>
      <main>
        <p>👏 Hey, welcome</p>

        <h1>
          News about <br />
          the <span>React</span> world
        </h1>

        <h2>
          Get to all the publications <strong>for {product.price} month</strong>
        </h2>

        <button type="button" onClick={handleSubscribe}>
          Subscribe now
        </button>
      </main>

      <img src="woman.svg" alt="Woman" />
    </Container>
  );
}

// SSR - Server Side Rendering

export const getServerSideProps: GetServerSideProps = async () => {
  const { unit_amount, id } = await stripe.prices.retrieve(
    'price_1JK8HwB0pCubjoSpb3i3HV8G',
    {
      expand: ['product'],
    },
  );

  const product = {
    priceId: id,
    price: new Intl.NumberFormat('en', {
      style: 'currency',
      currency: 'USD',
    }).format(unit_amount / 100),
  };

  return {
    props: {
      product,
    },
  };
};

// SSG - Static Site Generation
