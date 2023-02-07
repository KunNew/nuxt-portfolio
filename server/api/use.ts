export default defineEventHandler((event) => {
    return {
        uses: [
            {
                name: 'Editor',
                tools: ['VS Code',
                'Bearded Theme',

                ],
            },
            {
                name: 'Setup',
                tools: ['huawei D14'],
            } 
        ]
    }
  });
  