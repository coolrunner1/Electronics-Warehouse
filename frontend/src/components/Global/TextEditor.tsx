import {Editor} from "@tinymce/tinymce-react";

export type TextEditorProps = {
    value: string,
    setValue: (text: string) => void,
    height?: number,
}

export const TextEditor = (props: TextEditorProps) => {
    return (
        <Editor
            apiKey={import.meta.env.VITE_TINYMCE_APIKEY}
            value={props.value}
            onEditorChange={props.setValue}
            init={{
                height: props.height || 200,
                menubar: false,
                plugins: [
                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                    'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                ],
                toolbar: 'undo redo | blocks | ' +
                    'bold italic | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
        />
    );
};