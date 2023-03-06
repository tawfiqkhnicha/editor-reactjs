export default function Div(props: any){

    return( <div className="card">
            <div className="card-body">
                {props.children}
            </div>

    </div>
    )
}