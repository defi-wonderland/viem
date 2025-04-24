import type { InteropAddress } from '../types/interopAddress.js'

import { toBytes } from '../../../index.js'

export const toBinary = (interopAddress: InteropAddress): Uint8Array => {
  const version = toBytes(interopAddress.version)
  const chainType = toBytes(interopAddress.chainType)
  const chainReference = toBytes(interopAddress.chainReference)
  const chainReferenceLength = toBytes(chainReference.length)
  const address = toBytes(interopAddress.address)
  const addressLength = toBytes(address.length)

  return new Uint8Array([
    ...version,
    ...chainType,
    ...chainReferenceLength,
    ...chainReference,
    ...addressLength,
    ...address,
  ])
}
