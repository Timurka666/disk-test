import { useEffect } from "react";
import { useReceiveCodeMutation } from "../store/api";
import { useParams, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export function Home() {
const [trigger, {data, isSuccess}] = useReceiveCodeMutation();
const params = useParams();
const router = useNavigate();
  useEffect(() => {
    const code = window.location.href.split('=')[1];
    if (code) {
      trigger(code);
    }
    const token = Cookies.get('access');
    if (token) {
      router('/disk');
    }

  }, [])

  useEffect(() => {
    if (isSuccess && data) {
      Cookies.set('access', data.access_token, {expires: data.expires_in});
      Cookies.set('refresh', data.refresh_token, {expires: data.expires_in});
    }
  }, [isSuccess, data])

  return (
    <div className="login-form">
      <button className="btn" onClick={() => {window.location.href = 'https://oauth.yandex.ru/authorize?response_type=code&client_id=248ca1bfe86f4a14aca2244e9be96371'}}>Log in</button>
    </div>
  );
}