import type { Schema, Struct } from '@strapi/strapi';

export interface FormatsFormats extends Struct.ComponentSchema {
  collectionName: 'components_formats_formats';
  info: {
    description: '';
    displayName: 'formats';
  };
  attributes: {
    medium: Schema.Attribute.Component<'img-info.img-info', false>;
    small: Schema.Attribute.Component<'img-info.img-info', false>;
    thumbnail: Schema.Attribute.Component<'img-info.img-info', false>;
  };
}

export interface IconTextIconText extends Struct.ComponentSchema {
  collectionName: 'components_icon_text_icon_texts';
  info: {
    displayName: 'iconText';
  };
  attributes: {
    icon: Schema.Attribute.Component<'icon.icon', false>;
    smallText: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface IconIcon extends Struct.ComponentSchema {
  collectionName: 'components_icon_icons';
  info: {
    displayName: 'icon';
  };
  attributes: {
    alternativeText: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    ext: Schema.Attribute.String;
    formats: Schema.Attribute.String;
    hash: Schema.Attribute.String;
    height: Schema.Attribute.Integer;
    mime: Schema.Attribute.String;
    name: Schema.Attribute.String;
    previewUrl: Schema.Attribute.Text;
    provider: Schema.Attribute.String;
    provider_metadata: Schema.Attribute.String;
    size: Schema.Attribute.Decimal;
    url: Schema.Attribute.Text;
    width: Schema.Attribute.Integer;
  };
}

export interface ImgInfoImgInfo extends Struct.ComponentSchema {
  collectionName: 'components_img_info_img_infos';
  info: {
    displayName: 'img-info';
  };
  attributes: {
    ext: Schema.Attribute.String;
    hash: Schema.Attribute.String;
    height: Schema.Attribute.Integer;
    mime: Schema.Attribute.String;
    name: Schema.Attribute.String;
    path: Schema.Attribute.String;
    size: Schema.Attribute.Decimal;
    url: Schema.Attribute.Text;
    width: Schema.Attribute.Integer;
  };
}

export interface MainCtaMainCta extends Struct.ComponentSchema {
  collectionName: 'components_main_cta_main_ctas';
  info: {
    description: '';
    displayName: 'MainCTA';
  };
  attributes: {
    addText: Schema.Attribute.String;
    backColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    ctaText: Schema.Attribute.String;
    flag: Schema.Attribute.String;
    hoverBackColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    text: Schema.Attribute.String;
    TextColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
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

export interface SlidersSliders extends Struct.ComponentSchema {
  collectionName: 'components_sliders_sliders';
  info: {
    description: '';
    displayName: 'sliders';
  };
  attributes: {
    alternativeText: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    formats: Schema.Attribute.Component<'formats.formats', true>;
    height: Schema.Attribute.Integer;
    name: Schema.Attribute.String;
    width: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'formats.formats': FormatsFormats;
      'icon-text.icon-text': IconTextIconText;
      'icon.icon': IconIcon;
      'img-info.img-info': ImgInfoImgInfo;
      'main-cta.main-cta': MainCtaMainCta;
      'simple-url.simple-url': SimpleUrlSimpleUrl;
      'sliders.sliders': SlidersSliders;
    }
  }
}
