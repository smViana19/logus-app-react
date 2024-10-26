import { useParams, useLocation } from 'react-router-dom';

const StudentDetail = () => {
  const { id } = useParams(); // Pega o ID da URL
  const location = useLocation(); // Pega o estado passado com navigate
  const student = location.state?.student; // Informações do aluno

  if (!student) {
    return <div>Aluno não encontrado</div>;
  }

  const tableItems = [
    {
        name: "Liam James",
        email: "liamjames@example.com",
        position: "Software engineer",
        salary: "$100K"
    },
    {
        name: "Olivia Emma",
        email: "oliviaemma@example.com",
        position: "Product designer",
        salary: "$90K"
    },
    {
        name: "William Benjamin",
        email: "william.benjamin@example.com",
        position: "Front-end developer",
        salary: "$80K"
    },
    {
        name: "Henry Theodore",
        email: "henrytheodore@example.com",
        position: "Laravel engineer",
        salary: "$120K"
    },
    {
        name: "Amelia Elijah",
        email: "amelia.elijah@example.com",
        position: "Open source manager",
        salary: "$75K"
    },
]


    const handleModalEdit = () => {
        
    }


  return (
    <div className="p-5 min-h-screen sm:ml-20 lg:ml-64 mt-24 ml-14 md:ml-64 transition-all duration-300 dark:bg-zinc-800">

                <h3 className="text-gray-800 text-xl font-bold sm:text-2xl first-letter:uppercase flex gap-2">
                    {student.id} - <p className='first-letter:uppercase'>{student.nome} </p>
                </h3>
  
                <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 px-6">Prova 1</th>
                            <th className="py-3 px-6">Prova 2</th>
                            <th className="py-3 px-6">Prova 3</th>
                            <th className="py-3 px-6">Atividades</th>
                            <th className="py-3 px-6">Total</th>

                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            tableItems.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="px-6 py-4 whitespace-nowrap">0.0</td>
                                    <td className="px-6 py-4 whitespace-nowrap">0.0</td>
                                    <td className="px-6 py-4 whitespace-nowrap">0.0</td>
                                    <td className="px-6 py-4 whitespace-nowrap">0.0</td>
                                    <td className="px-6 py-4 whitespace-nowrap">0.0</td>

                                    <td className="text-right px-6 whitespace-nowrap">
                                        <button className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                                            Edit
                                        </button>
                                        <button className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                </div>


    </div>
  );
};

export default StudentDetail;
