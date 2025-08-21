import { useQuery } from '@tanstack/react-query'
import { getOps } from '../../api/OpsAPI'


export default function ConsOpsView() {

  const { data, isLoading } = useQuery({
    queryKey: ['ops'],
    queryFn: getOps
  })

  if(isLoading) return 'Cargando....'
  console.log(data)


  if (data) return (
    <>
        <h4 className="text-bold">Consulta Operaciones</h4>

        {data.length ? (
          data.map(ops => (
            <p key={ops.id_ops}>{ops.id_matricula}</p>
          ))
        ): (
          <p>No hay Ops</p>
        )}
    </>
  )
}
