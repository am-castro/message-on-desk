# Simple toast to show messages

## Sumary

1. Data

2. Toast types

3. Params

4. Usage


## Data

Data is composed by:

```ts
icon: (not defined);

title: string;
text: string;

moreText: string;

```

## Toast Types

1. success

2. error

3. warning

4. info

## Params

`isShowMore`: to show `moreText`, values: `true | false`, default: `false`;
`timeToExpire`: in miliseconds to remove toast, values: `number | null`, default: `null` (not expires);
`side`: to show on side of screen, values: `left | right`, default: `right`;
`location`: to show on location, values: `top | bottom`, default: `bottom`;
`maxWidth`: to set max width of toast, values: `string`, default: `270px`; (not implemented)
`minWidth`: to set min width of toast, values: `string`, default: `250px`; (not implemented)
<!-- `maxHeight`: to set max height of toast, values: `string`, default: `300px`; (not implemented) -->
`minHeight`: to set min height of toast, values: `string`, default: `60px`; (not implemented)
`type`: to set type of toast, values: `success | error | warning | info`, default: `info`;
`icon`: to set icon of toast, values: `string`, default: `''`; (not implemented)
`title`: to set title of toast, values: `string`, default: `''`;
`text`: to set text of toast, values: `string`, default: `''`;
`moreText`: to set moreText of toast, values: `string`, default: `''`;
<!-- `onClose`: to set function to close toast, values: `() => void`, default: `null`; (not implemented) -->

## Usage

```ts
import { MessageOnDesk } from 'message-on-desk';

export class MyComponent {
  constructor(private _message: MessageOnDesk) {}

  showToast() {
    this._message.show({
      title: 'Title',
      text: 'Text',
      isShowMore: true,
      moreText: 'More text',
      type: 'success',
      timeToExpire: 5000,
      location: 'top',
      side: 'left',
      maxWidth: '200px',
      maxHeight: '200px',
      icon: 'icon'
    });
  }
}
```

## License

MIT




