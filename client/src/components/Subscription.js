import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Mutation } from 'react-apollo';

import { CREATE_SUBSCRIPTION } from '../resolvers/user/mutation';

export default class TakeMoney extends React.Component {
  // onToken = (token) => {
  //   fetch('/save-stripe-token', {
  //     method: 'POST',
  //     body: JSON.stringify(token),
  //   }).then(response => {
  //     response.json().then(data => {
  //       alert(`We are in business, ${data.email}`);
  //     });
  //   });
  // }

  // ...

  render() {
    return (
      // ...
      <Mutation mutation={CREATE_SUBSCRIPTION}>
        {createSubscription => (
          <StripeCheckout
            name='To To Company Ltd.'
            token={async token => {
              const res = await createSubscription({
                variables: { source: token.id },
              });
              console.log(res);
            }}
            stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
          />
        )}
      </Mutation>
    );
  }
}
