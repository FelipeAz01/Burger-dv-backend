import Stripe from 'stripe';
import * as Yup from 'yup';
const stripe = require("stripe")('sk_test_51QnkhFP1MSumqDdZOKsLEY83z5Me0k3h9ZmJroHEjfVLsXvbsjRNJdFCFZNT05LlH4DlfDDc4lS1NAt8iImZK0uC00jbYnI5kY');



const calculateOrderAmount = (items) => {
  const total = items.reduce((acc, current) => {
    return current.price * current.quantity + acc;
  }, 0);
  return total
};


class CreatePaymentIntentController {
  async store(request, response) {
    const schema = Yup.object({
      products: Yup.array()
        .required()
        .of(
          Yup.object({
            id: Yup.number().required(),
            quantity: Yup.number().required(),
            price: Yup.number().required(),

          })
        ),
    });

    try {
      schema.validateSync(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ error: err.errors });
    }
    const { products } = request.body

    const amount = calculateOrderAmount(products);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "brl",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    response.json({
      clientSecret: paymentIntent.client_secret,
      dpmCheckerLink: `https://dashboard.stripe.com/settings/payment_methods/review?transaction_id=${paymentIntent.id}`,
    });
  }
}

export default new CreatePaymentIntentController();
