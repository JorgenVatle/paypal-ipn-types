/**
 * Paypal IPN transaction types
 * @link https://developer.paypal.com/docs/classic/ipn/integration-guide/IPNandPDTVariables/#ipn-transaction-types
 */
export type TransactionType = 'adjustment' | 'cart' | 'express_checkout' | 'masspay' | 'merch_pmt' | 'mp_cancel' | 'new_case' | 'payout'
    | 'pro_hosted' | 'recurring_payment' | 'recurring_payment_expired' | 'recurring_payment_failed'
    | 'recurring_payment_profile_cancel' | 'recurring_payment_profile_created' | 'recurring_payment_skipped'
    | 'recurring_payment_suspended' | 'recurring_payment_suspended_due_to_max_failed_payment' | 'send_money'
    | 'subscr_cancel' | 'subscr_eot' | 'subscr_failed' | 'subscr_modify' | 'subscr_payment' | 'subscr_signup'
    | 'virtual_terminal' | 'web_accept';

/**
 * PayPal Payment Information Variables
 * @link https://developer.paypal.com/docs/classic/ipn/integration-guide/IPNandPDTVariables/#payment-information-variables
 */
export interface NotificationVariables {
    business: string;       // Email or account ID of the payment recipient. Normalized to lowercase.
    charset: string;        // Character set. (Very informative, PayPal)
    custom: string;         // Custom value passed by you, the merchant.
    ipn_track_id: string;   // Internal, only for use by MTS. (Whatever that is)
    notify_version: string; // Message's version number.
    parent_txn_id: string;  // In the case of a refund, reversal, or canceled reversal, this variable contains the txn_id of the original transaction, while txn_id contains a new ID for the new transaction.
    receipt_id: string;     // Unique ID generated during guest checkout (payment by credit card without logging in).
    receiver_email: string; // Primary email address of the payment recipient (that is, the merchant). If the payment is sent to a non-primary email address on your PayPal account, the receiver_email is still your primary email.
    receiver_id: string;    // Unique account ID of the payment recipient (i.e., the merchant). This is the same as the recipient's referral ID.
    test_ipn?: '1';         // Whether the message is a test message. If defined and set to 1, the message comes from the PayPal sandbox.
    verify_sign: string;    // Encrypted string used to validate the authenticity of the transaction.
    txn_type: TransactionType; // The kind of transaction for which the IPN was sent.
    resend?: 'true' | 'false'; // Whether this IPN message was resent.
    residence_country: string; // ISO 3166 country code associated with the country of residence. (Of the customer?)
    txn_id: string;            // The merchant's original transaction identification number for the payment from the buyer, against which the case was registered.
}

export default interface PayPalIpn extends NotificationVariables {

    txn_type: TransactionType;

    /**
     * Reference Transaction and Billing Agreements variables
     * @link https://developer.paypal.com/docs/classic/ipn/integration-guide/IPNandPDTVariables/#reference-transaction-and-billing-agreements-variables
     */
    address_country: string;// Country of customer's address.
    address_city: string;   // City of customer's address.
    address_name: string;   // Name used with address (Included when the customer provides a Gift Address)
    address_state: string;  // Customer's address state.
    address_zip: string;    // Customer ZIP
    address_country_code: string; // ISO 3166 country code associated with the customers address.
    address_status: 'confirmed' | 'unconfirmed', // Customer address status
    discount: string;       // The total discount to be applied to a shopping cart in the currency of mc_currency
    first_name: string;     // First name of the customer
    last_name: string;      // Last name of the customer
    invoice: string;        // Pass-through variable for identifying order invoices.
    mc_currency: string;    // Currency. E.g. USD, GBP, EUR, etc.
    mc_fee: string;         // PayPal payment fee. mc_gross minus mc_fee equals the amount disposed into receiver_email account.
    mc_gross: string;       // Full amount of the customer's payment before the transaction fee is subtracted.
    mc_handling: string;    // Total handling amount associated with the transaction.
    mc_shipping: string;    // Total shipping amount associated with the transaction.
    mc_shipping1?: string;  // mc_shipping<item_name<x>> The combined total of shipping1 and shipping2 where x is the shopping card detail item number.
    memo: string;           // Memo as entered by your customer on PayPal's website.
    mp_currency: string;    // The merchant's primary currency.
    mp_custom: string;      // Custom text passed by the merchant during DoReferenceTransaction call at creation.
    mp_cycle_start?: string;// The month and day the payment agreement was created.
    mp_desc?: string;       // The agreement description set in SetExpressCheckout call.
    mp_id?: string;         // The encrypted billing agreement ID.
    mp_notification: string;// Sent to the merchant when an account is locked. All billing agreements for the account are canceled.
    payer_id: string;       // Unique customer ID.
    payment_date: string;   // Date of payment. Format: HH:MM:SS Mmm DD, YYYY PDT
    payer_email: string;    // Customer's primary email address. Use this email to provide any credits.
    num_cart_items?: string;// If this is a PayPal Shopping Cart transaction, number of items in cart.
    shipping_method: string;// The name of a shipping method from the Shipping Calculations section of the merchant's account profile. The buyer selected the named shipping method for this transaction.
    tax: string;            // Amount of tax charged on payment. PayPal appends the number of the item. For example, item_name1, item_name2). The tax variable is included only if there was a specific tax amount applied to a particular shopping cart item. Because total tax may apply to other items in the cart, the sum of taxx might not total to tax.
    verify_sign: string;    // Encrypted string used to validate the authenticity of the transaction.
    txn_id: string;         // The merchant's original transaction identification number for the payment from the buyer, against which the case was registered.
    item_name1: string;     // item_name<x>
    item_number1: string;   // item_number<x>
    quantity1: string;      // Quantity entered by your customer or passed by you, the merchant. If this is a shopping cart transaction, PayPal appends the number of the item (e.g. quantity1, quantity2).
    quantity2: string;      // Quantity entered by your customer or passed by you, the merchant. If this is a shopping cart transaction, PayPal appends the number of the item (e.g. quantity1, quantity2).
    [s: string]: string;    // Following item_name/number fields.
    residence_country: string;  // ISO 3166 country code associated with the country of residence. (Of the customer?)
    shipping_discount: string;  // The discount amount for shipping charges in amount, not percentage.
    option_name1: string;       // Option 1 name as requested by you. PayPal appends the number of the item where x represents the number of the shopping cart detail item.
    option_name2: string;       // Option 2 name as requested by you. PayPal appends the number of the item where x represents the number of the shopping cart detail item.
    option_selection1: string;  // Option 1 choice as entered by your customer. PayPal appends the number of the item where x represents the number of the shopping cart detail item.
    option_selection2: string;  // Option 2 choice as entered by your customer. PayPal appends the number of the item where x represents the number of the shopping cart detail item.
    transaction_subject: string;// A note or memo for the transaction. Applicable only after notify_version >=2.6.
    mp_status: 'A' | 'I';       // The agreement status. Possible values are A for an active agreement and I for an inactive agreement (equivalent to canceled).
    payer_status: 'verified' | 'unverified';    // Whether the customer has a verified PayPal account.
    mp_pay_type: 'INSTANT' | 'ANY' | 'ECHECK';  // The accepted payment type.
    payment_type: 'echeck' | 'instant'          // Whether the payment was funded with an eCheck or PayPal balance, card or instant transfer.
    protection_eligibility: 'Eligible' | 'Ineligible' | 'Partially Eligible - INR Only' // Status of the seller's protection eligibility.
        | 'Partially Eligible - Unauth Only' | 'PartiallyEligible' | 'None'
        | 'Active Fraud Control - Unauth Premium Eligible';
}