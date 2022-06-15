import { task } from 'hardhat/config'
import { NFT } from '../typechain/NFT'

task('setbaseuri', 'Set base URI').setAction(async function (_, { ethers: { getNamedSigner, getContract } }) {
    const deployer = await getNamedSigner('deployer')

    const nft = (await getContract('NFT', deployer)) as NFT

    console.log('Set base URI...')
    await (await nft.setBaseURI('ipfs://QmVxykncT5p48f7XkwsCJSrgo7BKuoCy9hBg8djDPpNqfx/')).wait()
    console.log('Set successfully')
})
