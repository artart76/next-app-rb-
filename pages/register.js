import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

import styles from "../styles/Login.module.css";

function register() {
    return (
        <Paper classes={{ root: styles.root }}>
			<Typography classes={{ root: styles.title }} variant="h5">
				Создание аккаунта
			</Typography>
			<form>
				<div className={styles.avatar}>
					<Avatar sx={{ width: 100, height: 100 }} />
				</div>
				<TextField 
					// error={Boolean(errors.fullName?.message)}
					// helperText={errors.email?.message}
					// { ...register('fullName', { required: 'Укажите полное имя' })}
					className={styles.field} label="Полное имя" fullWidth
				/>
				<TextField 
					// error={Boolean(errors.email?.message)}
					// helperText={errors.email?.message}
					type="email"
					// { ...register('email', { required: 'Укажите почту' })}
					className={styles.field} label="E-Mail" fullWidth
				/>
				<TextField 
					// error={Boolean(errors.password?.message)}
					// helperText={errors.password?.message}
					type="password"
					// { ...register('password', { required: 'Укажите пароль' })}
					className={styles.field} label="Пароль" fullWidth 
				/>
				<Button type="submit" size="large" variant="contained" fullWidth>
					Зарегистрироваться
				</Button>
			</form>
		</Paper>
    )
}

export default register;