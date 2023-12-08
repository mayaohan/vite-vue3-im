<template>
  <div style="width:100%;height:100%;" v-html="renderedMarkdown"></div>
</template>

<script>
import MarkdownIt from 'markdown-it';

export default {
    name:'dssMark',
    data() {
        return {
        renderedMarkdown: '',
        };
    },
    setup(props) {
        async function fetchAndReadMarkdown(apiEndpoint) {
            try {
                // Fetch the Markdown file from the API
                const response = await fetch(apiEndpoint);

                // Check if the response is successful
                if (!response.ok) {
                    throw new Error(`Failed to fetch Markdown file: ${response.statusText}`);
                }
                console.log(response.body)
                // Get the ReadableStream from the response
                const readableStream = response.body;

                // Create a TextDecoder for decoding bytes to string
                const textDecoder = new TextDecoder('utf-8'); // Adjust the encoding based on your file

                // Create an array to store chunks of bytes
                const chunks = [];

                // Create a ReadableStream reader
                const reader = readableStream.getReader();
                // console.log()
                // Read the stream in chunks
                while (true) {
                    const { done, value } = await reader.read();

                    if (done) {
                        break; // End of the stream
                    }
                    console.log(value)
                    chunks.push(value);
                }
                console.log(chunks)
                console.log(textDecoder.decode(chunks[0]))
                // Concatenate the chunks and decode to string
                const markdownContent = textDecoder.decode(chunks[0])//textDecoder.decode(Uint8Array.from(chunks.flat()));
                const md = new MarkdownIt();
                this.renderedMarkdown = md.render(markdownContent);
                // Now you have the Markdown content as a string
                console.log(markdownContent);
            } catch (error) {
                console.error('Error fetching or reading the Markdown file:', error);
            }
        }
        return {
            fetchAndReadMarkdown
        }

    },
    mounted() {
        this.fetchAndReadMarkdown('/src/components/demo/README.md')
    },
};
</script>