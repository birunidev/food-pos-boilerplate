import type { Struct, Schema } from '@strapi/strapi';

export interface OrderOrderedItems extends Struct.ComponentSchema {
  collectionName: 'components_order_ordered_items';
  info: {
    displayName: 'Ordered Items';
    icon: 'chartPie';
  };
  attributes: {
    product_title: Schema.Attribute.String;
    product_thumbnail: Schema.Attribute.String;
    quantity: Schema.Attribute.Integer;
    product_price: Schema.Attribute.Decimal;
    subtotal: Schema.Attribute.Decimal;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'order.ordered-items': OrderOrderedItems;
    }
  }
}
