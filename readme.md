1.yarn安装依赖
2.更改  const uriPrefix = 'https://ipfs.imaginaryones.com/ipfs/QmbPyXfPjthuFSAHGAaiZ6SJC5dqPGSuAfgUpme6sDDaRx/'的CID  ipfs图片文件夹的CID
3.yarn hardhat run scripts/create-metadata.ts 生成图片对应的json文件
4.部署合约 (根据图片数量生成一定数量的nft，修改合约数量)
  构造函数参数 name: 
               symbol: 
               baseuri:   ipfs:// CID /   ，最后要加上 '/'        //CID为元数据metadata文件夹的CID
