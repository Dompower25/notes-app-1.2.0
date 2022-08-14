import { createClient } from "@supabase/supabase-js";
export { SingUp, LogInMagic, LogIn, LogOut, userLog, supabase };

//supabase.com  сервисный следует использовать только на сервере, а не на клиенте или в браузере.
const SUPABASE_URL = "https://obbgzeamtcqhzsiwmktq.supabase.co";
const supabase = createClient(
  SUPABASE_URL,
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9iYmd6ZWFtdGNxaHpzaXdta3RxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTUyOTE4OTEsImV4cCI6MTk3MDg2Nzg5MX0.Y5_Qju8baHUSW6JFK62TgK4vlFF-tHBafrSYSU0gJ4w"
);

const userLog = supabase.auth.user();

async function SingUp(email, pass) {
  try {
    let { user, error } = await supabase.auth.signUp({
      email: email,
      password: pass,
    });
  } catch (error) {
    throw error;
  }
}

async function LogIn(
  email,
  pass,
  setStateLogin,
  setLogInLoading,
  setUserLogIn,
  setShowModal
) {
  try {
    setStateLogin(true);
    let { user, error } = await supabase.auth.signIn({
      email: email,
      password: pass,
    });
    const userLog = supabase.auth.user();
    setUserLogIn(userLog);

    (await user) ? setLogInLoading(true) : setStateLogin(false);
  } catch (error) {
    setShowModal(true);
    console.log(error);
  }
}

async function LogInMagic(email) {
  try {
    let { user, error } = await supabase.auth.signIn({
      email: email,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function LogOut() {
  try {
    let { error } = await supabase.auth.signOut();
    console.log(error);
  } catch (error) {
    throw error;
  }
}
