import { task } from 'hardhat/config'
import { NFT } from '../typechain/NFT'

task('nft:uri', 'get URI')
    .addParam('id', 'Token ID')
    .setAction(async function ({ id }, { ethers: { getNamedSigner, getContract } }) {
        const deployer = await getNamedSigner('deployer')

        const nft = (await getContract('NFT', deployer)) as NFT

        console.log('ID:', id)
        console.log('URI:', await nft.tokenURI(id))
    })
