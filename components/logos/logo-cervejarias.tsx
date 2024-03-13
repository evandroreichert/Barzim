import Image from 'next/image'

interface LogoProps {
  src: string | null
}

export const LogoCervejaria: React.FC<LogoProps> = ({ src }) => {
  if (src) {
    return (
      <Image
        style={{ marginLeft: '-10px' }}
        src={src}
        width={70}
        height={70}
        alt="Logo cervejaria - Barzim"
        className="object-cover"
      ></Image>
    )
  }
}
