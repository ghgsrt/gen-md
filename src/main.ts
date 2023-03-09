import * as core from '@actions/core';

async function run(): Promise<void> {
	try {
		let temp = 2;
	} catch (error) {
		if (error instanceof Error) core.setFailed(error.message);
	}
}

run();
