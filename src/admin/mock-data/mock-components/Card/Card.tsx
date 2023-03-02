export default function Card(props: any){

    return( <div className="card">
            <div className="card-body">
                {props.children}
            </div>

    </div>
    )
}