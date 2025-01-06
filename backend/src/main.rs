mod routes;

#[macro_use] extern crate rocket;

#[launch]
fn rocket() -> _ {
    rocket::build()
        .mount("/", routes![routes::health])
}

#[cfg(test)]
mod test {
    use crate::rocket;
    use rocket::local::blocking::Client;

    #[test]
    fn test_health() {
        let rocket = rocket();
        let client = Client::tracked(rocket).unwrap();
        
        let request = client.get("/health");
        let response = request.dispatch();
        
        assert_eq!(response.status().code, 200u16);
        assert_eq!(response.into_string().unwrap(), "OK");
    }
}
