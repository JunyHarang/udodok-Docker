package udodog.goGetterServer.model.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QDiscussionBoardReply is a Querydsl query type for DiscussionBoardReply
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QDiscussionBoardReply extends EntityPathBase<DiscussionBoardReply> {

    private static final long serialVersionUID = -652778132L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QDiscussionBoardReply discussionBoardReply = new QDiscussionBoardReply("discussionBoardReply");

    public final StringPath content = createString("content");

    public final DateTimePath<java.time.LocalDateTime> createAt = createDateTime("createAt", java.time.LocalDateTime.class);

    public final QDiscussionBoard discussionBoard;

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final QUser user;

    public QDiscussionBoardReply(String variable) {
        this(DiscussionBoardReply.class, forVariable(variable), INITS);
    }

    public QDiscussionBoardReply(Path<? extends DiscussionBoardReply> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QDiscussionBoardReply(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QDiscussionBoardReply(PathMetadata metadata, PathInits inits) {
        this(DiscussionBoardReply.class, metadata, inits);
    }

    public QDiscussionBoardReply(Class<? extends DiscussionBoardReply> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.discussionBoard = inits.isInitialized("discussionBoard") ? new QDiscussionBoard(forProperty("discussionBoard"), inits.get("discussionBoard")) : null;
        this.user = inits.isInitialized("user") ? new QUser(forProperty("user"), inits.get("user")) : null;
    }

}

