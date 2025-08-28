import React from 'react';
import type { EndOfCallReportMessageResponse } from '../types/conversation.type';

interface TranscriptSummaryProps {
    callData: EndOfCallReportMessageResponse | null;
    isLoading?: boolean;
    agentName: string;
    onStartNewCall?: () => void;
}

export const TranscriptSummary: React.FC<TranscriptSummaryProps> = ({
    callData,
    agentName,
    isLoading = false,
    onStartNewCall
}) => {
    const isOlivia = agentName === "Olivia";
    const bgColor = isOlivia ? "bg-[#14B8A6]" : "bg-[#6366F1]";
    const textColor = "text-white"; // Use white text on colored backgrounds

    if (isLoading) {
        return (
            <div className={`${bgColor} ${textColor} rounded-xl flex flex-col items-center justify-center gap-x-2 p-6`}>
                <p className="text-white/80">Loading your call summary...</p>
            </div>
        );
    }

    if (!callData) {
        return (
            <div className={`${bgColor} ${textColor} rounded-xl flex flex-col items-center justify-center gap-x-2 p-6`}>
                <p className="text-white/80">No call data available</p>
            </div>
        );
    }

    return (
        <div className={`${bgColor} ${textColor} rounded-xl p-6 max-w-2xl w-full shadow-lg`}>
            <div className="space-y-4">
                <div className="border-b border-white/20 pb-2">
                    <h3 className="text-lg font-semibold text-white">
                        Transcript Summary
                    </h3>
                </div>

                <div className="space-y-3">
                    {callData.summaryTitle && (
                        <div>
                            <h4 className="text-md font-medium text-white mb-1">
                                {callData.summaryTitle}
                            </h4>
                        </div>
                    )}

                    <div>
                        <p className="text-sm text-white/90 leading-relaxed">
                            {callData.summary || "No summary available."}
                        </p>
                    </div>

                    <div className="text-xs text-white/70 space-y-1 pt-2 border-t border-white/20">
                        <p>Duration: {callData.durationSeconds}s</p>
                        <p>Call ID: {callData.callId}</p>
                        <p>Ended: {callData.endedReason}</p>
                    </div>
                </div>

                {onStartNewCall && (
                    <div className="pt-4 border-t border-white/20">
                        <button
                            onClick={onStartNewCall}
                            className="w-full bg-white/20 hover:bg-white/30 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                        >
                            Start New Call
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
