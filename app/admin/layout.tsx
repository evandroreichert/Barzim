import NavWrapper from "@/components/dashboard/nav-wrapper/nav-wrapper"
import Link from "next/link"
import { currentRole } from '@/lib/auth'

const AdminLayout: React.FC<{ children: React.ReactNode }> = async ({ children }) => {
  const role = await currentRole()
  if (role !== 'ADMIN') return <h1>Você não pode ver esta página</h1>
  else
  return (
    <div style={{backgroundColor: 'rgb(242 242 242)'}} className="flex min-h-screen w-full flex-col bg-slate-100 md:mx-auto md:max-w-[480px]">
      <NavWrapper/>
      <div className="flex justify-between gap-2 p-4">
          <Link href="/admin/cervejarias/adicionar">
            <span className="text-gray-700 hover:text-gray-900 cursor-pointer">
              Adicionar Cervejaria
            </span>
          </Link>
          <Link href="/admin/tipos/adicionar">
            <span className="text-gray-700 hover:text-gray-900 cursor-pointer">
              Adicionar Tipo de Cerveja
            </span>
          </Link>
          <Link href="/admin/cervejas/nova">
            <span className="text-gray-700 hover:text-gray-900 cursor-pointer">
              Adicionar Cerveja
            </span>
          </Link>
      </div>
      <div style={{paddingBlock: '2rem', paddingInline: '1rem'}}>{children}</div>
    </div>
  )

}

export default AdminLayout
