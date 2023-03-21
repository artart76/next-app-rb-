import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import styles from "../styles/Login.module.css";

function login() {
    return (
        <Paper classes={{ root: styles.root }}>
        <Typography classes={{ root: styles.title }} variant="h5">
            Вход в аккаунт
        </Typography>
        <form >
            <TextField
                className={styles.field}
                label="E-Mail"
                // error={Boolean(errors.email?.message)}
                // helperText={errors.email?.message}
                type="email"
                // { ...register('email', { required: 'Укажите почту' })}
                fullWidth
            />
            <TextField
                className={styles.field}
                label="Пароль"
                // error={Boolean(errors.password?.message)}
                // helperText={errors.password?.message}
                type="password"
                // { ...register('password', { required: 'Укажите пароль' })}
                fullWidth
            />
            <Button type="submit" size="large" variant="contained" fullWidth>
                Войти
            </Button>
        </form>
    </Paper>
    )
}

export default login;