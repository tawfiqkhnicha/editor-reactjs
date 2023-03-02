import DataTable from "@/common/components/table/DataTable";
import PageHeader from "@/common/layout/headers/page-header/PageHeader";
import { useDispatch } from "react-redux";
const tableHead = [
  {
    title: "Title",
    className: "w-50"
  },
  {
    title: "Author",
    className: ""
  },
  {
    title: "Date",
    className: ""
  }
]
const tableData = [
  {
    title: "index",
    author: "dev_1",
    date: "23/02/2023",
  },
  {
    title: "about",
    author: "dev_1",
    date: "23/02/2023",
  },
];
export default function Index() {

  const dispatch = useDispatch()

  function newPage(){
    dispatch.pageModel.newPage()
  }
  

  const actions = [
    {
      name: "add new page",
      icon: "bi bi-plus",
      action:  newPage
    }
  ]

  return (

    <>
      <PageHeader title="pages" actions={actions} />
      <DataTable title="List of pages" tableData={tableData} tableHead={tableHead} />
    </>

  )
}