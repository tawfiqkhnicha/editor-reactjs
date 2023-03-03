import React, { useEffect, useState } from "react";
import { IComponent } from "@/admin/helpers/interfaces/IComponent";
import { siteComponents } from "@/admin/helpers/import/SiteComponents";
import { useDispatch, useSelector } from 'react-redux';
import GenericModal from "@/admin/components/common/modals/GenericModal";



export default function Editor(data: IComponent): React.ReactNode {

    if (!data) return null;
    const dispatch = useDispatch();

    const forceUpdate = React.useReducer(() => ({}), {})[1] as () => void

    const [modal, setModal] = useState(false);
    const [componentId, setId] = useState(0)
    const toggle = () => {
        setModal(!modal)
    };
    const changeId = (id: number) => {
        setId(id)
        console.log(id);
        
        toggle()
    }

    const closeModal = () => {
        setModal(false);
        console.log(modal)
    }

    function createComponent(component: IComponent): React.ReactNode {


        if (!component) return null;


        let { type, id, category, props, childrens } = component;

        const addChild = function (id: number) {

            dispatch.pageModel.addChild(id)
            forceUpdate()

        }

        const deleteElement = function (id: number) {
            dispatch.pageModel.deleteElement(id)
            forceUpdate()
        }



        const closeBtn = (
            <button className="btn" style={{ fontSize: 16 }} onClick={toggle} type="button">
                &times;
            </button>
        );


        return <div className=" d-flex flex-column justify-content-center mb-2">
            <div className=" d-flex justify-content-between border border-bottom-0">
                {id}
                <button className="btn"> <i className="bi bi-gear-fill"></i></button>
                <button className="btn" onClick={() => deleteElement(id)}> <i className="bi bi-x-lg"></i></button>
            </div>
            <div className="w-80 border border w-100">
                {React.createElement(
                    siteComponents[type],
                    props,
                    Array.isArray(childrens) ? childrens.map((item) => render(item)) : render(childrens ?? null)

                )}
                {
                    category === "CONTAINER" && <div className="mt-2">
                        <button className="btn" onClick={() => changeId(id)}> <i className="bi bi-plus-square"></i> insert Module(s)</button>
                    </div>
                }

            </div>

            <GenericModal modal={modal} toggle={toggle} closeBtn={closeBtn} id={componentId} confirmBtn={forceUpdate} />

        </div>
    }

    function render(data: IComponent | null): React.ReactNode {

        if (!data) return null


        return createComponent(data)

    }

    return render(data);

}