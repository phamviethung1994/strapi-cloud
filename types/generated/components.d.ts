import type { Schema, Struct } from '@strapi/strapi';

export interface HeaderSimpleUrlHeaderSimpleUrl extends Struct.ComponentSchema {
  collectionName: 'components_header_simple_url_header_simple_urls';
  info: {
    displayName: 'Header-Simple-url';
  };
  attributes: {
    ctaText: Schema.Attribute.String;
    text: Schema.Attribute.String;
    TextColor: Schema.Attribute.String;
    url: Schema.Attribute.Text;
  };
}

export interface SimpleUrlSimpleUrl extends Struct.ComponentSchema {
  collectionName: 'components_simple_url_simple_urls';
  info: {
    displayName: 'simpleUrl';
    icon: 'cursor';
  };
  attributes: {
    name: Schema.Attribute.String;
    newWindow: Schema.Attribute.Boolean;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'header-simple-url.header-simple-url': HeaderSimpleUrlHeaderSimpleUrl;
      'simple-url.simple-url': SimpleUrlSimpleUrl;
    }
  }
}
