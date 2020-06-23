import gql from 'graphql-tag';

export const EVENTS = gql`
query{
  events{
    id
    event_name
    description
    date_start
    date_end
    business_id
    category
    list_id, 
    pic1, 
    onlinePayment
  }
}
`

export const TOPCHART = gql`
query{
  topChart{
    id
    event_name
    description
    date_start
    date_end
    business_id
    category
    list_id
    nombre
    direccion, 
  }
}
`

export const EVENTBYID = gql`
query($id: String) {
  eventById(id:$id){
    id
    event_name
    description
    date_start
    date_end
    business_id
    category
    list_id,
    pic1,
    onlinePayment
  }
}`

export const EVENTBYBUSINESS = gql`
query($business_id:String){
  eventsByBusiness(business_id:$business_id){
    actives{
      id
      date_end
      date_start
      business_id
      category
      event_name
      description
      list_id
      nombre
      direccion,
      pic1, 
      onlinePayment
    }
    upcoming{
      id
      date_end
      date_start
      business_id
      category
      event_name
      description
      list_id
      nombre
      direccion,
      pic1, 
      onlinePayment
    }
    expired{
            id
      date_end
      date_start
      business_id
      category
      event_name
      description
      list_id
      nombre
      direccion,
      pic1, 
      onlinePayment
    }
    
  }
}`