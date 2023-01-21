export interface Alien {
  id: Number;
  birth_date: String;
  create_date: String;
  first_name: String;
  last_name: String;
  login_id: String;
  login_pw: String;
  settings: JSON | null;
  update_date: Date;
}
