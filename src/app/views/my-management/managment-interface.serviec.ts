export interface offerStatus {
    'offerid': any,
    'accountname': any,
    'division': any,
    'planttext': any,
    'rfqreference': any,
    'creationdatetime': any,
    'closedate': any,
    'pending_with': any,
    'creationuser': any,
    'tons': any,
    'items': any,
}
export interface pendingInvoiceStatus {
    'customer_number': any,
    'customer_name': any,
    'sales_order_number': any,
    'invoice_number': any,
    'invoice_posting_date': any,
    'item_number': any,
    'amount': any,
    'invoice_aging': any,
    'invoice_aging_bucket': any,

}
export interface orderStatus {
    "confirmed_delivery_date": any,
    "customer_reference": any,
    "delivering_plant": any,
    // "delv_week": any,
    "order_status": any,
    "quantity": any,
    "sales_doc_item_number": any,
    "sales_doc_number": any,
    "ship_to": any,
    "sold_to": any
}
