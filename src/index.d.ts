export default interface PayPalIpn {
    /**
     * Paypal IPN transaction types
     * @link https://developer.paypal.com/docs/classic/ipn/integration-guide/IPNandPDTVariables/#ipn-transaction-types
     */
    txn_type: 'adjustment' | 'cart' | 'express_checkout' | 'masspay' | 'merch_pmt' | 'mp_cancel' | 'new_case' | 'payout'
        | 'pro_hosted' | 'recurring_payment' | 'recurring_payment_expired' | 'recurring_payment_failed'
        | 'recurring_payment_profile_cancel' | 'recurring_payment_profile_created' | 'recurring_payment_skipped'
        | 'recurring_payment_suspended' | 'recurring_payment_suspended_due_to_max_failed_payment' | 'send_money'
        | 'subscr_cancel' | 'subscr_eot' | 'subscr_failed' | 'subscr_modify' | 'subscr_payment' | 'subscr_signup'
        | 'virtual_terminal' | 'web_accept'
}