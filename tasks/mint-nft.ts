import { task } from 'hardhat/config'
import { NFT } from '../typechain/NFT'

task('mint:nft', 'Mint Nft')
    .addParam('address', 'Mint to address')
    .setAction(async function ({ address }, { ethers: { getNamedSigner, getContract } }) {
        const deployer = await getNamedSigner('deployer')

        const nft = (await getContract('NFT', deployer)) as NFT

        console.log('Mint NFT...')
        await (await nft.mint(address)).wait()
        console.log('Mint successfully')
    })
