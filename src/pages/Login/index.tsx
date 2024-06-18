import LoginForm from './components/LoginForm';
import styles from './index.less';

export default () => {
  return (
    <div className={styles.login}>
      <div className={styles.login_bg}></div>
      <div className={styles.login_title}></div>
      <div className={styles.loginBox}>
        <h1>前台登录</h1>
        <LoginForm />
      </div>
    </div>
  );
};
