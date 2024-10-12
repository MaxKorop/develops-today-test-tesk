import react from '@vitejs/plugin-react';
import { type ConfigEnv, defineConfig, loadEnv } from "vite";

const config = ({ mode }: ConfigEnv): ReturnType<typeof defineConfig> => {
	const {
		VITE_PORT,
	} = loadEnv(mode, process.cwd());

	return defineConfig({
		build: {
			outDir: "build",
		},
		plugins: [react()],
		server: {
			port: Number(VITE_PORT),
		},
	});
};

export default config;
