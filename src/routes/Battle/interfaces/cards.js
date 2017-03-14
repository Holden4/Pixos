/* @flow */

export type cardObject = {
  name: string,
  imgUrl: string
}

export type cardsStateObject = {
  fetching: boolean,
  cards: Array<cardObject>
}
