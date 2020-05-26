export interface Identity {
    username: string
    name: string
    middleName?: string
    givenName: string
    picture?: string
    verified: boolean
}

const mockImage = 'https://instagram.fcuu2-1.fna.fbcdn.net/v/t51.2885-19/s320x320/98310377_594558414491172_7013496653076234240_n.jpg?_nc_ht=instagram.fcuu2-1.fna.fbcdn.net&_nc_ohc=7HYL08-tclcAX-zUoR5&oh=fcf353941cdc759740b14bbde1182590&oe=5EF71CD9'


export const MockIdentity: Identity = {
    username: 'ethancoen',
    name: 'Ethan',
    givenName: 'Coen',
    verified: true,
    picture: mockImage
}