import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'

const deployFunction: DeployFunction = async function ({
  deployments,
  getNamedAccounts,
  getChainId,
}: HardhatRuntimeEnvironment) {
  console.log('Running NFT deploy script')
  const { deploy } = deployments

  const { deployer } = await getNamedAccounts()
  console.log(await getChainId())

  const { address } = await deploy('NFT', {
    from: deployer,
    log: true,
    deterministicDeployment: false,
    skipIfAlreadyDeployed: false,
    args: ['Test NFT', 'TNFT'],
  })

  console.log('NFT deployed at ', address)
}

export default deployFunction

deployFunction.dependencies = []

deployFunction.tags = ['ERC20Token']
