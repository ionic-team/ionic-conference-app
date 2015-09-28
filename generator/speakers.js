[
  '{{repeat(72)}}',
  {
    _id: '{{index()}}',
    picture: 'http://lorempixel.com/32/32',
    name: '{{firstName()}} {{surname()}}',
    company: '{{company().toUpperCase()}}',
    email: '{{email()}}',
  }
]
