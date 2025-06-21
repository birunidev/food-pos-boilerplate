import { ApiClient } from "../api";
import { JsonResource, PaginatedResources } from "../queries";

interface OrderItemRequest {
  product_id: number;
  quantity: number;
}

export interface CheckoutRequest {
  customer_phone: string;
  customer_name: string;
  order_type: string;
  order_notes: string;
  table_no: string;
  order_items: OrderItemRequest[];
}

export interface OrderedItem {
  product_title: string;
  product_thumbnail: string;
  quantity: number;
  product_price: number;
  subtotal: number;
}

export interface IOrder {
  id: number;
  documentId: string;
  customer_name: string;
  customer_phone: string;
  customer_email: string | null;
  subtotal: number;
  tax: number;
  grand_total: number;
  order_date: string;
  table_no: string;
  order_code: string;
  payment_status: "unpaid" | "paid";
  paid_at: string | null;
  payment_log: unknown | null;
  midtrans_transaction_id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string | null;
  order_status: "pending_payment" | "processing" | "completed" | "cancelled";
  order_type: "DINE_IN" | "TAKE_AWAY";
  order_notes: string;
  qris_url: string;
  ordered_items: OrderedItem[];
}

export interface MidtransTransactionResponse {
  status_code: string;
  transaction_id: string;
  gross_amount: string;
  currency: string;
  order_id: string;
  payment_type: string;
  signature_key: string;
  transaction_status: string;
  fraud_status: string;
  status_message: string;
  merchant_id: string;
  transaction_type: string;
  issuer: string;
  acquirer: string;
  reference_id: string;
  shopeepay_reference_number: string;
  transaction_time: string;
  settlement_time: string;
  expiry_time: string;
}

export interface ICheckoutResponse extends IOrder {
  midtrans: {
    status_code: string;
    status_message: string;
    transaction_id: string;
    order_id: string;
    merchant_id: string;
    gross_amount: string;
    currency: string;
    payment_type: string;
    transaction_time: string;
    transaction_status: string;
    fraud_status: string;
    actions: Array<{
      name: string;
      method: string;
      url: string;
    }>;
    channel_response_code: string;
    channel_response_message: string;
    acquirer: string;
    qr_string: string;
    expiry_time: string;
  };
}
export interface GetOrderParams {
  populate?: string;
  id?: string;
  filters?: {
    customer_phone?: {
      $eq?: string;
    };
    order_date?: {
      $gte?: string;
      $lte?: string;
    };
  };
}

export const getOrders = (params: GetOrderParams) =>
  ApiClient<PaginatedResources<IOrder>>({
    method: "GET",
    url: "/orders",
    params,
  });

export const getOrder = (id: string, params: GetOrderParams) =>
  ApiClient<JsonResource<IOrder>>({
    method: "GET",
    url: `/orders/${id}`,
    params,
  });

export const createOrdersCheckout = (data: CheckoutRequest) =>
  ApiClient<ICheckoutResponse>({
    method: "POST",
    url: "/orders/checkout",
    data: {
      ...data,
    },
  });
export interface TransactionWebhookResponse {
  message: string;
  success: boolean;
  data: IOrder;
}

export const getTransactionStatus = (midtransTransactionId: string) =>
  ApiClient<TransactionWebhookResponse>({
    method: "POST",
    url: "/orders/webhook",
    data: {
      midtrans_transaction_id: midtransTransactionId,
    },
  });

export interface UpdateOrderRequest {
  order_status:
    | "pending_payment"
    | "processing"
    | "completed"
    | "cancelled"
    | "ready_to_serve";
}

export const updateOrder = (id: string, data: UpdateOrderRequest) =>
  ApiClient<JsonResource<IOrder>>({
    method: "PUT",
    url: `/orders/${id}`,
    data: {
      data: {
        order_status: data.order_status,
      },
    },
  });
