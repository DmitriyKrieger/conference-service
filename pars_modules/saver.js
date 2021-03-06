const fs = require('fs');
export async function arrSaver(lines, output) {
    try {
        for (const key in lines) {
            try {
                fs.appendFile(output, lines[key] + '\n', (err) => {
                    if (err) {
                        console.error(err)
                    }
                    // console.log(lines[key])
                })
            } catch (error) {
                throw error
            }

        }
    } catch (error) {
        throw error
    }
}
export async function lineSaver(line, output) {
    try {
        fs.appendFile(output, line + '\n', (err) => {
            if (err) {
                // console.error(err)
            }
            // console.log(line)
        })
    } catch (error) {
        throw error
    }

}
export function lineSaverSync(line, output) {
    try {
        fs.appendFileSync(output,line+'\n');
        }
     catch (error) {
        throw error
    }

}
export async function startSaver(line, output) {
    try {
        fs.writeFile(output, line + '\n', (err) => {
            if (err) {
                console.error(err)
            }
            console.log(line)
        })
    } catch (error) {
        throw error
    }

}