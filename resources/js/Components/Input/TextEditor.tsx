import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

interface TextEditorInterface {
    value: string;
    height?: number;
    menubar?: boolean;
    updateValue: (value?: string) => void;
}

export default function TextEditor(props: TextEditorInterface) {
    const { updateValue, value, height = 300, menubar = false } = props;
    const editorRef = useRef(null);
    const apiKey = import.meta.env.VITE_TINY_MCE_KEY;

    return (
        <>
            <Editor
                apiKey={apiKey}
                onInit={(editor: Editor) => (editorRef.current = editor)}
                initialValue={value}
                init={{
                    height,
                    menubar,
                    plugins: [
                        'advlist',
                        'autolink',
                        'lists',
                        'link',
                        'image',
                        'charmap',
                        'preview',
                        'anchor',
                        'searchreplace',
                        'visualblocks',
                        'code',
                        'fullscreen',
                        'insertdatetime',
                        'media',
                        'table',
                        'code',
                        'help',
                        'wordcount',
                    ],
                    setup: function (editor: Editor) {
                        editor.on('change', function () {
                            updateValue(editor.getContent());
                        });
                    },
                    toolbar:
                        'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                    content_style:
                        'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                }}
            />
        </>
    );
}
