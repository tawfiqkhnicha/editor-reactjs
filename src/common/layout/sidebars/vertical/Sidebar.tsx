import { Button, Nav, NavItem } from "reactstrap";
import Logo from "@/common/components/Logo/Logo";
import { useDispatch } from "react-redux";
const navigation = [
  {
    title: "Dashboard",
    to: "#",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Pages",
    to: "Index",
    icon: "bi bi-file-earmark",
  }

];

const Sidebar = ({ showMobilemenu }: any) => {

  const dispatch = useDispatch();
  function navigateTo(page: string){
    dispatch.pageModel.setPage({ page: page })
  }
  


  return (
    <div className="p-3">
      <div className="d-flex align-items-center justify-content-center mt-5">
        <Logo />
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <a className={
                "nav-link text-secondary py-3 pointer"
              }
              onClick={()=>navigateTo(navi.to)}
              >

                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </a>
            </NavItem>
          ))}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
