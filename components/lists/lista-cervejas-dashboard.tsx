import { type TypeObjectCerveja } from '@/data/data'
import Link from 'next/link'
import { CardVertCerveja } from '../cards/card-vertical-cerveja'
import { BeerName } from '../titles/beer-name'

interface TItemCerveja {
    id: number
    nomeCerveja: string
    mainImage: string | null
    tipoCerveja: { nome: string }
}

const ListaCervejasDashboard: React.FC<{ cervejas: TypeObjectCerveja[] }> = ({ cervejas }) => {
    return (
        <ul style={{paddingInline: '2rem', paddingBlock: '.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
            {cervejas.map((itemCerveja: TItemCerveja): JSX.Element => {
                const {
                    id,
                    nomeCerveja,
                    mainImage,
                    tipoCerveja: { nome: tipoCerveja },
                } = itemCerveja
                return (
                    <li className="col-span-1" key={id}>
                        <Link href={`/cervejas/${id}`}>
                            <CardVertCerveja
                                nomeCerveja={nomeCerveja}
                                imagem={mainImage ?? 'undefined'} >
                                <BeerName
                                    variant='dark-mode'
                                    cerveja={{ nomeCerveja, tipoCerveja }}
                                />
                            </CardVertCerveja>
                        </Link>
                    </li>
                )
            }
            )}
        </ul>
    )
}

export default ListaCervejasDashboard