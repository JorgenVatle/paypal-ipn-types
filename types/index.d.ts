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
    parent_txn_id?: string;  // In the case of a refund, reversal, or canceled reversal, this variable contains the txn_id of the original transaction, while txn_id contains a new ID for the new transaction.
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

/**
 * Buyer information variables
 * @link https://developer.paypal.com/docs/classic/ipn/integration-guide/IPNandPDTVariables/#buyer-information-variables
 */
export interface BuyerInformationVariables {
    address_country: string;        // Country of customer's address.
    address_city: string;           // City of customer's address.
    address_name: string;           // Name used with address (Included when the customer provides a Gift Address)
    address_state: string;          // Customer's address state.
    address_street: string;         // Customer's street address.
    address_zip: string;            // Customer ZIP
    contact_phone: string;          // Customer's telephone number.
    first_name: string;             // First name of the customer
    last_name: string;              // Last name of the customer
    payer_email: string;            // Customer's primary email address. Use this email to provide any credits.
    payer_id: string;               // Unique customer ID.
    payer_business_name: string;    // Customer's company name, if the customer is a business.
    address_country_code: string;   // ISO 3166 country code associated with the customers address.
    address_status: 'confirmed' | 'unconfirmed', // Customer address status
}

/**
 * Payment information variables
 * @link https://developer.paypal.com/docs/classic/ipn/integration-guide/IPNandPDTVariables/#payment-information-variables
 */
export interface PaymentInformationVariables {
    auth_amount: string;    // Authorization amount.
    auth_exp: string;       // Authorization expiration date and time (HH:MM:SS DD Mmm YY, YYYY PST)
    auth_status: string;    // Status of authorization.
    discount: string;       // The total discount to be applied to a shopping cart in the currency of mc_currency
    invoice: string;        // Pass-through variable for identifying order invoices.
    mc_currency: string;    // Currency. E.g. USD, GBP, EUR, etc.
    mc_fee: string;         // PayPal payment fee. mc_gross minus mc_fee equals the amount disposed into receiver_email account.
    mc_gross: string;       // Full amount of the customer's payment before the transaction fee is subtracted.
    mc_handling: string;    // Total handling amount associated with the transaction.
    mc_shipping: string;    // Total shipping amount associated with the transaction.
    mc_shipping1?: string;  // mc_shipping<item_name<x>> The combined total of shipping1 and shipping2 where x is the shopping card detail item number.
    memo: string;           // Memo as entered by your customer on PayPal's website.
    exchange_rate: string;  // Exchange rate if a currency conversion occurred.
    payment_date: string;   // Date of payment. Format: HH:MM:SS Mmm DD, YYYY PDT
    settle_amount: string;  // Amount that is deposited into the account's primary balance after a currency conversion from automatic conversion (through your Payment Receiving Preferences) or manual conversion (through manually accepting a payment).
    quantity: string;       // Quantity entered by your customer or passed by you, the merchant. If this is a shopping cart transaction, PayPal appends the number of the item (e.g. quantity1, quantity2).
    shipping: string;       // Shipping charges associated with this transaction. Format: unsigned, no currency symbol, two decimal places.
    tax: string;            // Amount of tax charged on payment. PayPal appends the number of the item. For example, item_name1, item_name2). The tax variable is included only if there was a specific tax amount applied to a particular shopping cart item. Because total tax may apply to other items in the cart, the sum of taxx might not total to tax.
    num_cart_items?: string;  // If this is a PayPal Shopping Cart transaction, number of items in cart.
    settle_currency: string;  // Currency of settle_amount
    shipping_method: string;  // The name of a shipping method from the Shipping Calculations section of the merchant's account profile. The buyer selected the named shipping method for this transaction.
    remaining_settle: string; // Remaining amount that can be captured with Authorization and Capture.


    option_name1: string;       // Option 1 name as requested by you. PayPal appends the number of the item where x represents the number of the shopping cart detail item.
    option_name2: string;       // Option 2 name as requested by you. PayPal appends the number of the item where x represents the number of the shopping cart detail item.
    option_selection1: string;  // Option 1 choice as entered by your customer. PayPal appends the number of the item where x represents the number of the shopping cart detail item.
    option_selection2: string;  // Option 2 choice as entered by your customer. PayPal appends the number of the item where x represents the number of the shopping cart detail item.
    item_name: string;          // Single item name, applicable for non-cart checkouts.
    item_number: string;       // Single item number, applicable for non-cart checkouts.
    item_name1: string;         // item_name<x>, applicable for cart checkouts.
    item_number1: string;       // item_number<x>, applicable for cart checkouts.
    quantity1: string;          // Quantity entered by your customer or passed by you, the merchant. If this is a shopping cart transaction, PayPal appends the number of the item (e.g. quantity1, quantity2).
    quantity2: string;          // Quantity entered by your customer or passed by you, the merchant. If this is a shopping cart transaction, PayPal appends the number of the item (e.g. quantity1, quantity2).
    [s: string]: string;        // Following item, quantity and option fields. (option_name<x>, item_name<x>, option_selection<x>, item_number<x>)

    payment_type: 'echeck' | 'instant'          // Whether the payment was funded with an eCheck or PayPal balance, card or instant transfer.
    payer_status: 'verified' | 'unverified';    // Whether the customer has a verified PayPal account.
    echeck_time_processed: string;              // The time an eCheck was processed; for example, when the status changes to Success or Completed. (hh:mm:ss MM DD, YYYY ZONE)


    protection_eligibility: 'Eligible' | 'Ineligible' | 'Partially Eligible - INR Only' // Status of the seller's protection eligibility.
        | 'Partially Eligible - Unauth Only' | 'PartiallyEligible' | 'None'
        | 'Active Fraud Control - Unauth Premium Eligible';

    payment_status: 'Canceled_Reversal' // A reversal has been canceled. For example, you won a dispute with the customer, and the funds for the transaction that was reversed have been returned to you.
        | 'Completed'   // The payment has been completed, and the funds have been added successfully to your account balance.
        | 'Created'     // A German ELV payment is made using Express Checkout.
        | 'Denied'      // The payment was denied. This happens only if the payment was previously pending because of one of the reasons listed for the pending_reason variable or the Fraud_Management_Filters_x variable.
        | 'Expired'     // This authorization has expired and cannot be captured.
        | 'Failed'      // The payment has failed. This happens only if the payment was made from your customer's bank account.
        | 'Pending'     // The payment is pending. See pending_reason for more information.
        | 'Refunded'    // You refunded the payment.
        | 'Reversed'    // A payment was reversed due to a chargeback or other type of reversal. The funds have been removed from your account balance and returned to the buyer. The reason for the reversal is specified in the ReasonCode element.
        | 'Processed'   // A payment has been accepted.
        | 'Voided'      // This authorization has been voided.

    pending_reason:     // This variable is set only if payment_status is Pending.
        'address'               // Your Payment Receiving Preferences are set so that if a customer does not include a confirmed shipping address, you must manually accept or deny the payment. To change your preference, go to the Preferences section of your Profile.
        | 'authorization'       //  You set the payment action to Authorization and have not yet captured funds.
        | 'delayed_disbursement'// The transaction has been approved and is currently awaiting funding from the bank. This typically takes less than 48 hrs.
        | 'echeck'              // The payment is pending because it was made by an eCheck that has not yet cleared.
        | 'intl'                // The payment is pending because you hold a non-U.S. account and do not have a withdrawal mechanism. You must manually accept or deny this payment from your Account Overview.
        | 'multi_currency'      // You do not have a balance in the currency sent, and you do not have your profile's Payment Receiving Preferences option set to automatically convert and accept this payment. As a result, you must manually accept or deny this payment.
        | 'order'               // You set the payment action to Order and have not yet captured funds.
        | 'paymentreview'       // The payment is pending while it is reviewed by PayPal for risk.
        | 'regulatory_review'   // The payment is pending because PayPal is reviewing it for compliance with government regulations. PayPal will complete this review within 72 hours. When the review is complete, you will receive a second IPN message whose payment_status/reason code variables indicate the result.
        | 'unilateral'          // The payment is pending because it was made to an email address that is not yet registered or confirmed.
        | 'upgrade'             // The payment is pending because it was made via credit card and you must upgrade your account to Business or Premier status before you can receive the funds. upgrade can also mean that you have reached the monthly limit for transactions on your account.
        | 'verify'              // The payment is pending because you are not yet verified. You must verify your account before you can accept this payment.
        | 'other'               // The payment is pending for a reason other than those listed above. For more information, contact PayPal Customer Service.

    reason_code:        // This variable is set if payment_status is Reversed, Refunded, Canceled_Reversal, or Denied.
        'adjustment_reversal'       // Reversal of an adjustment.
        | 'admin_fraud_reversal'    // The transaction has been reversed due to fraud detected by PayPal administrators.
        | 'admin_reversal'          // The transaction has been reversed by PayPal administrators.
        | 'buyer-complaint'         // The transaction has been reversed due to a complaint from your customer.
        | 'chargeback'              // The transaction has been reversed due to a chargeback by your customer.
        | 'chargeback_reimbursement'// Reimbursement for a chargeback.
        | 'chargeback_settlement'   // Settlement of a chargeback.
        | 'guarantee'               // The transaction has been reversed because your customer exercised a money-back guarantee.
        | 'other'                   // Unspecified reason.
        | 'refund'                  // The transaction has been reversed because you gave the customer a refund.
        | 'regulatory_block'        // PayPal blocked the transaction due to a violation of a government regulation. In this case, payment_status is Denied.
        | 'regulatory_reject'       // PayPal rejected the transaction due to a violation of a government regulation and returned the funds to the buyer. In this case, payment_status is Denied.
        | 'unauthorized_claim'      // The transaction has been reversed because it was not authorized by the buyer.
        | 'unauthorized_spoof'      // The transaction has been reversed due to a customer dispute in which an unauthorized spoof is suspected.
        | 'regulatory_review_exceeding_sla' // PayPal did not complete the review for compliance with government regulations within 72 hours, as required. Consequently, PayPal auto-reversed the transaction and returned the funds to the buyer. In this case, payment_status is Denied. Note that `sla` stands for `service level agreement`.
        | string // Additional codes may be returned, despite not being documented by PayPal.

    /**
     * One or more filters that identify a triggering action associated with one of the following payment_status values:
     * Pending, Completed, Denied, where x is a number starting with 1 that makes the IPN variable name unique;
     * The filters and their ID numbers are as follows:
     */
    fraud_management_pending_filters_x:
          '1' // AVS No Match
        | '2' // AVS Partial Match
        | '3' // AVS Unavailable/Unsupported
        | '4' // Card Security Code (CSC) Mismatch
        | '5' // Maximum Transaction Amount
        | '6' // Unconfirmed Address
        | '7' // Country Monitor
        | '8' // Large Order Number
        | '9' // Billing/Shipping Address Mismatch
        | '10' // Risky ZIP Code
        | '11' // Suspected Freight Forwarder Check
        | '12' // Total Purchase Price Minimum
        | '13' // IP Address Velocity
        | '14' // Risky Email Address Domain Check
        | '15' // Risky Bank Identification Number (BIN) Check
        | '16' // Risky IP Address Range
        | '17' // PayPal Fraud Model
}

/**
 * Reference Transaction and Billing Agreements variables
 * @link https://developer.paypal.com/docs/classic/ipn/integration-guide/IPNandPDTVariables/#reference-transaction-and-billing-agreements-variables
 */
export interface BillingAgreementVariables extends PaymentInformationVariables, BuyerInformationVariables {
    mp_currency: string;    // The merchant's primary currency.
    mp_custom: string;      // Custom text passed by the merchant during DoReferenceTransaction call at creation.
    mp_cycle_start?: string;// The month and day the payment agreement was created.
    mp_desc?: string;       // The agreement description set in SetExpressCheckout call.
    mp_id?: string;         // The encrypted billing agreement ID.
    mp_notification: string;// Sent to the merchant when an account is locked. All billing agreements for the account are canceled.
    shipping_discount: string;  // The discount amount for shipping charges in amount, not percentage.
    transaction_subject: string;// A note or memo for the transaction. Applicable only after notify_version >=2.6.
    mp_status: 'A' | 'I';       // The agreement status. Possible values are A for an active agreement and I for an inactive agreement (equivalent to canceled).
    mp_pay_type: 'INSTANT' | 'ANY' | 'ECHECK';  // The accepted payment type.
}

/**
 * Reference Transaction and Billing Agreements variables
 * @link https://developer.paypal.com/docs/classic/ipn/integration-guide/IPNandPDTVariables/#reference-transaction-and-billing-agreements-variables
 */
export default interface PayPalIpn extends Partial<BillingAgreementVariables>, NotificationVariables {
   cmd: string;
}