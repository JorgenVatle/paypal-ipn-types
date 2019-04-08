# PayPal IPN Types
 Tired of looking up PayPal's arguably terrible documentation every time you need to work with their IPN  system?
 
 This package contains type definitions for 
[all properties PayPal might pass to you on an IPN request](https://developer.paypal.com/docs/classic/ipn/integration-guide/IPNandPDTVariables),
along with descriptions for each property. And with type definitions you get auto-completion from your IDE.
 
## Installation
Pull in the package from NPM:
 ```bash
 npm install paypal-ipn-types
 ```
 
## Usage
 Pull in the type definitions you need. For incoming IPNs, use the default export:
```typescript
import PayPalIpn from 'paypal-ipn-types';

app.get('/paypal/ipn', (req, res) => {
    const ipn: PayPalIpn = req.data; // You should now have editor auto-completes for all IPN input values.
    
    console.log(ipn.payer_email);
});
```

Depending on your editor, you can also `CTRL + CLICK` on `ipn.payer_email` to get more information on the property. 

## Contributing
Contributions are more than welcome! If you spot a missing or incorrectly formatted or documented property, 
just submit a pull request.

If you're adding a type, please load and use for the property in `paypal-ipn-types.test.ts`. 

## License
This repository is licensed under the ISC license.

Copyright (c) 2019, Jørgen Vatle.
 