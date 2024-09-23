import { useLocation } from "react-router-dom"

export default function Contact() {

  const queryString1 = useLocation().search

  const queryParams2 = new URLSearchParams(queryString1)

  const name = queryParams2.get("name")
  
  

  return (
    <div>
        {name && <h2>Hello {name} - Contact  us here...</h2>}
        <p>
        " Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet."
        </p>
    </div>
  )
}
