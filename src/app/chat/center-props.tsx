import {
    HeartOutlined,
    ReadOutlined,
    RocketOutlined,
    SmileOutlined,
} from '@ant-design/icons';
import { Prompts } from '@ant-design/x';
import type { PromptsProps } from '@ant-design/x';
import { Card, Space } from 'antd';
import React from 'react';

const renderTitle = (icon: React.ReactElement, title: string) => (
    <Space align="start">
        {icon}
        <span>{title}</span>
    </Space>
);

const items: PromptsProps['items'] = [
    {
        key: '21',
        label: renderTitle(<ReadOutlined style={{ color: '#1890FF' }} />, 'Design Guide'),
        children: [
            {
                key: '1-1',
                icon: <HeartOutlined />,
                label: `Know the well`,
            },
            {
                key: '1-2',
                icon: <SmileOutlined />,
                label: `Set the AI role`,
            },
        ],
    },
    {
        key: '2',
        label: renderTitle(<RocketOutlined style={{ color: '#722ED1' }} />, 'Start Creating'),
        children: [
            {
                key: '2-1',
                icon: <RocketOutlined />,
                label: 'Fast Start',
            },
            {
                key: '2-2',
                icon: <RocketOutlined />,
                label: 'Online Playground',
            },
        ],
    },
];

const CenteredProps: React.FC<{ onPromptClick: (content: string) => void }> = ({ onPromptClick }) => {
    return (
        <div className="text-center mb-4 flex justify-center gap-4">
            {items.map((item) => (
                <Card key={item.key} style={{ borderRadius: 0, border: 0, width: '45%' }}>
                    <Prompts
                        title={item.label}
                        items={item.children}
                        wrap
                        styles={{
                            item: {
                                flex: 'none',
                                width: '100%',
                                backgroundImage: `linear-gradient(137deg, #e5f4ff 0%, #efe7ff 100%)`,
                                border: 0,
                            },
                            subItem: {
                                background: 'rgba(255,255,255,0.45)',
                                border: '1px solid #FFF',
                            },
                        }}
                        onItemClick={(info) => {
                            onPromptClick(info.data.label as string);
                        }}
                    />
                </Card>
            ))}
        </div>
    );
};

export default CenteredProps;