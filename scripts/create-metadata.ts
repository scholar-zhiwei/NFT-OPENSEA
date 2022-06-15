import fs from 'fs'

const metadataTemple = {
    id: 0,
    name: '',
    image: '',
    describe: '',
    attributes: [
        {
            trait_type: 'Ear',
            value: '',
        },
        {
            trait_type: 'Hat',
            value: '',
        },
    ],
}
const nftName = 'Demo NFT'
const uriPrefix = 'https://ipfs.imaginaryones.com/ipfs/QmbPyXfPjthuFSAHGAaiZ6SJC5dqPGSuAfgUpme6sDDaRx/'
const uriSuffix = '.png'

const attributeArr1 = ['Pink', 'Blue', 'Green']
const attributeArr2 = ['Black', 'White', 'Yellow']

async function createMetadata(id: number, attributes: any) {
    let metadata = metadataTemple
    metadata['id'] = id
    metadata['name'] = nftName + ' #' + id
    metadata['image'] = uriPrefix + id + uriSuffix
    metadata['describe'] = 'product describe'
    metadata['attributes'] = attributes

    const filename = './metadata/' + id
    let data = JSON.stringify(metadata, null, 2)
    fs.writeFileSync(filename, data)
}

async function main() {
    const dirCheck = fs.existsSync('./metadata/')
    if (!dirCheck) {
        fs.mkdirSync('./metadata')
    }
    const attributes: any[] = []
    for (let i = 0; i < attributeArr1.length; i++) {
        const arr = {
            attributes: [
                {
                    trait_type: 'Ear',
                    value: attributeArr1[i],
                },
                {
                    trait_type: 'Hat',
                    value: attributeArr2[i],
                },
            ],
        }
        attributes.push(arr)
    }
    attributes.forEach(async (item, index) => {
        await createMetadata(index + 1, item.attributes)
    })
    console.log('build successfully')
}

main()
    .then(() => {
        // process.exit(0)
    })
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
